import React from 'react'
import { Table } from 'antd'
import classes from './DashboardTable.module.css';
const DashboardTable = ({ fakeData }) => {
  const dataSource = fakeData
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Domain',
      dataIndex: 'domain',
      key: 'domain',
    },
    {
      title: 'Years of Exp',
      dataIndex: 'yearOfExperience',
      key: 'yearOfExperience',
    },
    {
      title: 'Recruiter Name',
      dataIndex: 'recruiterName',
      key: 'recruiterName',
    },
    {
      title: 'Interview Type',
      dataIndex: 'interviewType',
      key: 'interviewType',
    }
  ];
  return (
    <div className={classes.dashboardTable}>
      <Table dataSource={dataSource} rowKey={obj => obj.candidateId} columns={columns} pagination={{ pageSize: 5 }} />
    </div>
  )
}
export default DashboardTable