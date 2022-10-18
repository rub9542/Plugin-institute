import React from 'react'
import Avatar from 'components/Avatar'

import Flex from 'components/Flex'
import StudentDrawerContent from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent'
import StudentDetailsAction from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Partials/StudentDetailsAction'
import MailIcon from 'components/icons/MailIcon'
import CallIcon from 'components/icons/CallIcon'

import {
  StyledDrawer,
  DrawerHeader,
  HeaderFlexOne,
  InfoSection,
  StudentName,
  CollegeName,
} from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/style'

const ViewStudentDrawer = ({
  viewDrawer,
  setViewDrawer,
  singleStudentData,
}) => {
  const studentData = {
    id: 1,
    student_name: 'Vikram Rathore',
    email: 'vikram.sh01@gmail.com',
    country_code: '+91-900 000 1234',
    career_objective:
      'Looking for opportunities to incorporate my skills and training to help the company grow. I am looking forward to roles that will help me realise my potential by exploring the various aspects of this field. I am seeking opportunities to join a company that can help me in enhancing my skills, strengthening my knowledge and realising my potential. I am willing to explore a wide variety of opportunities that can help me gain perspective.',
    educations: [
      {
        id: 1,
        name: 'PG - Christ University',
        board: 'MBA Degree in Entrepreneurship and Innovation',
        batch: 'May 2022 - April 2024',
        location: 'Bangalore, Karanataka',
        current: true,
        sem: '4th',
        marks: '82',
        Aggregate: true,
      },
      {
        id: 2,
        name: 'UG - IIT Kanpur',
        board:
          'Bachelor of Technology Degree  in Entrepreneurship and Innovation ',
        batch: 'May 2018 - April 2022',
        location: 'Kanpur, Uttar Pradesh',
        current: false,
        sem: '0',
        marks: '82',
        Aggregate: false,
      },
      {
        id: 3,
        name: '12th, National Public School ',
        board: 'CBSE Board',
        batch: 'May 2017 - April 2018',
        location: 'Bangalore, Karanataka',
        current: false,
        sem: '0',
        marks: '88',
        Aggregate: false,
      },
      {
        id: 4,
        name: '10th, National Public School',
        board: 'CBSE Board',
        batch: 'May 2015 - April 2016',
        location: 'Bangalore, Karanataka',
        current: false,
        sem: '0',
        marks: '84',
        Aggregate: false,
      },
    ],
    project: [
      {
        id: 1,
        name: 'Oil Skimmer RC Boat',
        company: 'Company - Enuvos Technology',
        work: 'The rc drone is controlled by a dc motor propelled system with 2x rudders with user making use of an RC remote to operate the boat. The rc boat is integrated with an on-board oil skimmer system that separates oil from the water and collects it in a different tank.',
        skills: ['Solid Edge', 'Inventor'],
        duration: 'April 2017 - July 2017',
      },
      {
        id: 2,
        name: 'Thermal Screening Drone ',
        company: 'Company - BOSCH ',
        work: 'Our drone uses a combination of video camera and thermal camera to get the closeup solar panel, electrical tower footage along with the thermal scan footage. The drone uses a controller to operate the flight and ensure a long range control.',
        skills: ['Solid Edge', 'Inventor'],
        duration: 'April 2017 - July 2017',
      },
    ],
    internship: [
      {
        id: 1,
        name: 'Technician Trainee',
        company: 'Company - Ashok Leyland',
        work: 'Devising technical training programs according to organizational requirements. Producing training schedules and classroom agenda. Determining course content according to objectives.Prepare training material (presentations, worksheets etc.)',
        skills: ['ProE', 'Catia'],
        duration: 'Jan 2018 - June 2018',
      },
      {
        id: 2,
        name: 'Sales and Marketing',
        company: 'Company - Tata Motors',
        work: 'Devising technical training programs according to organizational requirements. Producing training schedules and classroom agenda. Determining course content according to objectives.Prepare training material (presentations, worksheets etc.)',
        skills: ['Solid Edge', 'Inventor'],
        duration: 'Jan 2018 - June 2018',
      },
    ],
    courses: [
      {
        id: 1,
        name: 'CAD/CAM',
        company: 'Institute - Coursera',
        work: 'CAD serves as an aid to shape and communicate an abstract idea in your imagination, into a 3D or 2D model for others to understand. It further helps a user to make sense of the spatial aspects in terms of area, volume, and magnitude of objects around them.',
        skills: ['Key Creator', 'Fusion 360'],
        duration: 'Jan 2019 - April 2019',
      },
      {
        id: 2,
        name: 'Mechatronics',
        company: 'Institute - Upgrad',
        work: 'Mechatronics is the synergistic integration of sensors, actuators, signal conditioning, power electronics, decision and control algorithms, and computer hardware and software to manage complexity, uncertainty, and communication in engineered systems.',
        skills: ['Solid Edge', 'Inventor'],
        duration: 'May 2019 - July 2019',
      },
    ],
    training: [
      {
        id: 1,
        name: 'Future of Machine Design',
        company: 'Company - Kirloskar',
        work: '12% of the group have changed jobs in the last year, and while 27.5% of those changes were promotions, and 15% were due to COVID layoffs or other job reductions, 32.5% left to pursue other opportunities. About two-thirds of respondents said their company is as focused on employee retention as it was a year ago.',
        skills: ['MATLAB', 'Unigraphics'],
        duration: 'Aug 2019 - Oct 2019',
      },
      {
        id: 2,
        name: 'Steam Engineering',
        company: 'Company - Thermax',
        work: 'The properties of steam explained here, including the ability of steam under pressure to carry, and then give up, large amounts of energy. Topics include saturated steam tables, dryness fraction and flash steam.',
        skills: ['Solid Edge', 'Inventor'],
        duration: 'Nov 2019 - Dec 2019',
      },
    ],
    honors: [
      {
        id: 1,
        name: 'Student of Integrity Award',
        board: 'Christ University',
        date: '25 Dec 2021',
        work: 'The Student of Integrity Award recognizes one individual for demonstrating courage and perseverance in championing the ideals of academic integrity in the face of opposition and adversity. It is intended for an individual who has demonstrated the sixth fundamental value - courage - to champion the ideals of academic integrity in building a culture of integrity.',
      },
      {
        id: 2,
        name: 'Difference-Maker Award',
        board: 'IIT Kanpur',
        date: '14 Feb 2019',
        work: 'Difference Maker. This award honors a deserving individual who is an attorney or non-attorney: (a) who has made a difference in the local community and (b) who lives in the local geographic area where the Division is meeting and where the Difference Makers Awards program is being held.',
      },
    ],
    experience: [
      {
        id: 1,
        type: 'Full Time',
        designation: 'Product Designer',
        company: 'Microsoft',
        about:
          'Product Designers are responsible for coming up with new product designs that meet the needs and wants of consumers. They will have many duties, such as creating design concepts, drawing ideas to determine which one is best suited for the product, and communicating their plans effectively so engineers can execute them.',
        experience: '7 Months',
        duration: 'Jan 2022-Present',
      },
    ],
  }

  const title = () => {
    return (
      <DrawerHeader centerVertically spaceBetween>
        <HeaderFlexOne spaceBetween>
          <Flex>
            <Avatar
              background
              src={''}
              size={90}
              IconName={singleStudentData?.firstName?.split('')?.[0]}
              font={18}
            />

            <InfoSection column center>
              <StudentName>
                {singleStudentData?.firstName} {singleStudentData?.lastName}
              </StudentName>
              <CollegeName>
                <MailIcon /> vikram.sh01@gmail.com
              </CollegeName>
              <CollegeName>
                <CallIcon /> +91-
                {singleStudentData?.studentPersonalProfile?.contactNumber}
              </CollegeName>
            </InfoSection>
          </Flex>
        </HeaderFlexOne>

        <StudentDetailsAction />
      </DrawerHeader>
    )
  }

  const content = () => {
    return <StudentDrawerContent studentData={studentData} />
  }

  return (
    <>
      <StyledDrawer
        width="65%"
        title={title()}
        placement="right"
        // closable={false}
        onClose={() => setViewDrawer(false)}
        visible={viewDrawer}
        content={content()}
        padding="15px 30px"
      />
    </>
  )
}

export default ViewStudentDrawer
