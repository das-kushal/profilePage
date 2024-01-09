import '../App.css'
import { Box,Heading,Text,Flex } from '@chakra-ui/react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as SchoolIcon } from '../assets/school.svg';
import { ReactComponent as WorkIcon } from '../assets/work.svg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

let workIconStyles = { background: "#06D6A0" };
let schoolIconStyles = { background: "#f9c74f" };

const AnimatedVerticalTimelineElement = ({ mydate,title,content,icon,location,pos,place }) => {
    const [ref,inView] = useInView({
        triggerOnce: true,
        threshold: 0.2, // Adjust this threshold as needed
    });

    const iconComponent = icon === 'school' ? <SchoolIcon /> : <WorkIcon />;

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0,x: pos == 'left' ? -40 : 40 }}
                whileInView={{ opacity: inView ? 1 : 0,x: inView ? 0 : pos == 'left' ? -40 : 40 }}
                viewport={{ once: true }}
                transition={{ duration: .5 }}
                style={{
                    // marginBottom: '10px',
                    opacity: 0.3,
                    // height: '200px'
                }}
            >

                <Box
                    // bg={'#171923'}
                    bg={'#171923'}
                    // bg={'whiteAlpha.900'}
                    borderRadius="lg" p="4" mb="2"
                    borderColor={'#484848'}
                    // borderColor={'#171923'}
                    borderWidth={'1px'}
                    _hover={{
                        borderColor: '#EC0000',
                        // boxShadow: 'dark-lg',
                        cursor: 'pointer',
                    }}

                    shadow={'2xl'}
                >
                    <Heading as="h3" size={["sm","md"]} mb="2" color={icon == "work" ? '#50D6A0' : '#F9C74F'} fontWeight={'bold'}>
                        {title}
                    </Heading>
                    <Text fontSize="sm" color="gray.500" mb="2">
                        <strong> {place}</strong> - {location}
                    </Text>
                    <Text mb="2" fontSize={["sm","md"]} color={'#DDDBDB'}>{content}</Text>
                    <Flex justify="space-between" align="center">
                        <Text fontSize="sm" color="gray.500">
                            {mydate}
                        </Text>
                        {/* Add any additional elements here, such as buttons, links, etc. */}
                    </Flex>
                </Box >
            </motion.div>
        </>
    );
};

export default function TimeLineWhoAmI({ items }) {
    return (
        <motion.div

            initial={{ opacity: 0,y: 20 }}
            whileInView={{ y: 0,opacity: 1,transition: { duration: .5,delay: .5 } }}
            viewport={{ once: true }}

            style={{
                overflow: 'scroll',
                scrollBehavior: 'smooth',
                // border: '1px solid blue',
                // height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Flex
                overflowY="scroll"
                scrollBehavior="smooth"
                w={['90%','80%']}
                flexDirection={'column'}
            // h={'200vh'}
            >
                {/* <VerticalTimeline lineColor='transparent' layout='2-columns'> */}
                {items.map((item,index) => (
                    <AnimatedVerticalTimelineElement
                        key={index}
                        mydate={item.date}
                        title={item.title}
                        content={item.description}
                        icon={item.icon}
                        location={item.location}
                        pos={item.id % 2 == 0 ? 'left' : 'right'}
                        place={item.place}
                    />
                ))}
                {/* </VerticalTimeline> */}
            </Flex>
        </motion.div>
    );
}



{/* <VerticalTimelineElement
date={mydate} // Keep the date as a string
dateClassName="date"
iconStyle={icon === 'work' ? workIconStyles : schoolIconStyles}
icon={iconComponent}
// style={pos=='left'?{marginLeft:'70px'}:{marginRight:'70px'}}
// layout={pos}
position={pos == 'left' ? 'left' : 'right'}
style={{
    opacity: 1,
    border: '1px solid red',
    // height: '100px'
}}

>
<h3 className="vertical-timeline-element-title" style={{ color: icon == "work" ? '#50D6A0' : '#F9C74F',fontWeight: "bold",fontSize: '1.2rem' }}>
    {title}
</h3>
<h5 className="vertical-timeline-element-subtitle" style={{ color: '#000',fontWeight: "normal",fontSize: '.8rem' }}>
    <strong>{place},</strong><br /> {location}
</h5>
<p id="description" style={{ color: '#000',}}>{content}</p>
</VerticalTimelineElement> */}