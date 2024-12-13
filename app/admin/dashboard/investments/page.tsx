"use client"
import { AppSidebar } from '@/components/app-sidebar'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import { EmptyPage } from '@/components/dashboard/EmptyPage'
import SubHeader from '@/components/dashboard/SubHeader'
import { DataTable } from '@/components/global/DataTable'
import LoadingPage from '@/components/global/LoadingPage'
import { Card } from '@/components/ui/card'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import useCollectionGroup from '@/hooks/UseCollectionGroup'
import formatCurrency, { getDaysDifference } from '@/lib/utilFunc/converter'
import { columnInvestment } from '@/lib/utils'
import { InvestmentType } from '@/types/plan'
import moment from 'moment'
import React from 'react'







function Investment() {
  
  const [investments, loading] = useCollectionGroup(`investmentDatas`) as readonly [InvestmentType[], boolean, string | null]
 
  if (loading) return <LoadingPage />
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='w-[85%] max-w-full'>
        <DashboardHeader label="Dashboard" />
        <div className="main-gradient !bg-gradient-to-br min-h-screen w-full lg:p-6 p-4 ">
          <SubHeader />
          <DataTable columns={columnInvestment} data={investments} />
          </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Investment