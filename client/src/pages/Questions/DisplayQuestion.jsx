import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/leftSidebar'
import QuestionsDetails from './QuestionsDetails'
import RightSidebar from '../../components/RightSidebar/RightSidebar'


const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <QuestionsDetails/>
        <RightSidebar />
      </div>
    </div>
  )
}

export default DisplayQuestion