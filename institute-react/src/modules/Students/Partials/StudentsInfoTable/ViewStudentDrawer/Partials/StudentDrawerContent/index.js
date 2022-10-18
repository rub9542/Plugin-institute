import React from 'react'
import EducationSection from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Partials/EducationSection'
import InfoSection from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Partials/InfoSection'
import HonorsAwardsSection from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Partials/HonorsAwardsSection'
import WorkExperienceSection from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Partials/WorkExperienceSection'
import CurrentlyPursuingDetails from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Partials/CurrentlyPursuingDetails'
import SocialMediaLinks from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Partials/SocialMediaLinks'
import OtherDetails from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Partials/OtherDetails'

import {
  Main,
  MainHeading,
  StyledP,
  StyledDivider,
  SubFLex,
} from 'modules/Students/Partials/StudentsInfoTable/ViewStudentDrawer/Partials/StudentDrawerContent/Style/style'

const StudentDrawerContent = ({ studentData }) => {
  return (
    <>
      <Main>
        <MainHeading marginBottom="15px">Career Objective</MainHeading>
        <StyledP>{studentData?.career_objective}</StyledP>

        <StyledDivider />

        <EducationSection studentData={studentData} />

        <StyledDivider />

        <MainHeading>Project</MainHeading>
        <SubFLex column gap="25px">
          {studentData?.project?.map(item => (
            <InfoSection
              name={item?.name}
              company={item?.company}
              work={item?.work}
              skills={item?.skills}
              duration={item?.duration}
            />
          ))}
        </SubFLex>

        <StyledDivider />

        <MainHeading>Internship</MainHeading>
        <SubFLex column gap="25px">
          {studentData?.internship?.map(item => (
            <InfoSection
              name={item?.name}
              company={item?.company}
              work={item?.work}
              skills={item?.skills}
              duration={item?.duration}
            />
          ))}
        </SubFLex>

        <StyledDivider />

        <MainHeading>Courses</MainHeading>
        <SubFLex column gap="25px">
          {studentData?.courses?.map(item => (
            <InfoSection
              name={item?.name}
              company={item?.company}
              work={item?.work}
              skills={item?.skills}
              duration={item?.duration}
            />
          ))}
        </SubFLex>

        <StyledDivider />

        <MainHeading>Training</MainHeading>
        <SubFLex column gap="25px">
          {studentData?.training?.map(item => (
            <InfoSection
              name={item?.name}
              company={item?.company}
              work={item?.work}
              skills={item?.skills}
              duration={item?.duration}
            />
          ))}
        </SubFLex>

        <StyledDivider />

        <HonorsAwardsSection />

        <StyledDivider />

        <WorkExperienceSection />

        <StyledDivider />

        <CurrentlyPursuingDetails />

        <StyledDivider />

        <SocialMediaLinks />

        <StyledDivider />

        <OtherDetails />
      </Main>
    </>
  )
}

export default StudentDrawerContent
