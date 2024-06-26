import { CheckCircleIcon } from "@chakra-ui/icons"
import { Box, Button, Divider, Flex, Heading, List, ListIcon, ListItem, Tag, Text, VStack } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import Layout from "../../components/layout"
import SimilarJobs from "../../components/similarjobs"
import { jobdatafetcher } from "../../datafetch/datafetch"

function JobPage(props) {
  const router = useRouter()

  const { job, isLoading, isError } = jobdatafetcher(router.query.jobid)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  var jobDetails = {
    title: "Senior Frontend Developer",
    location: "New York, NY or Remote",
    type: "Full-Time",
    description: `We are looking for a Senior Frontend Developer to join our engineering team and help us develop and maintain various software products. You will be in charge of building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.`,
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable code and libraries for future use",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize application for maximum speed and scalability",
      "Assure that all user input is validated before submitting to back-end",
      "Collaborate with other team members and stakeholders",
    ],
    requirements: [
      "Proven work experience as a Front-end developer",
      "Hands on experience with markup languages",
      "Experience with JavaScript, CSS and jQuery",
      "Familiarity with browser testing and debugging",
      "In-depth understanding of the entire web development process (design, development and deployment)",
      "An ability to perform well in a fast-paced environment",
      "Excellent analytical and multitasking skills",
    ],
  }
  if (props.jobDetails) {
    jobDetails = props.jobDetails
  }

  if (job) {
    const jobelem = job[0]

    return (
      <Flex direction="row" align="top" justify="top">
        <Box maxW="800px" p={5}>
          <VStack spacing={5} align="stretch">
            <Heading as="h1" size="xl">
              {jobelem.title}
            </Heading>
            <Text fontSize="lg">{jobelem.description}</Text>
            <Box>
              <Tag mr={2} colorScheme="blue">
                {jobelem.location}
              </Tag>
              <Tag colorScheme="green">{jobelem.type}</Tag>
            </Box>
            <Divider />
            <Box>
              <Heading as="h2" size="lg">
                Responsibilities:
              </Heading>
              <List spacing={2}>
                {jobDetails.responsibilities.map((responsibility, index) => (
                  <ListItem key={index} display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {responsibility}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Heading as="h2" size="lg">
                Requirements:
              </Heading>
              <List spacing={2}>
                {jobDetails.requirements.map((requirement, index) => (
                  <ListItem key={index} display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {requirement}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Button colorScheme="blue" size="lg">
              Apply for this job
            </Button>
          </VStack>
        </Box>

        <SimilarJobs />
      </Flex>
    )
  }
}

/**This place should be used to get any information from the server side
 * example : we need to get the session token
 * or any thing related to the page  */

JobPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default JobPage
