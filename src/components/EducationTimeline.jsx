import '../App.css'
import { Box } from '@chakra-ui/react';
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
        <motion.div
            ref={ref}
            initial={{ opacity: 0,x: pos == 'left' ? -40 : 40 }}
            whileInView={{ opacity: inView ? 1 : 0,x: inView ? 0 : pos == 'left' ? -40 : 40 }}
            transition={{ duration: 1 }}
            style={{ marginBottom: '10px',opacity: 0.3 }}
        >
            <VerticalTimelineElement
                date={mydate} // Keep the date as a string
                dateClassName="date"
                iconStyle={icon === 'work' ? workIconStyles : schoolIconStyles}
                icon={iconComponent}
                // style={pos=='left'?{marginLeft:'70px'}:{marginRight:'70px'}}
                // layout={pos}
                position={pos == 'left' ? 'left' : 'right'}
                style={{ opacity: 1 }}

            >
                <h3 className="vertical-timeline-element-title" style={{ color: icon == "work" ? '#50D6A0' : '#F9C74F',fontWeight: "bold",fontSize: '1.2rem' }}>
                    {title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle" style={{ color: '#000',fontWeight: "normal",fontSize: '.8rem' }}>
                    <strong>{place},</strong><br /> {location}
                </h5>
                <p id="description" style={{ color: '#000',}}>{content}</p>
            </VerticalTimelineElement>
        </motion.div>
    );
};

export default function TimeLineWhoAmI({ items }) {
    return (
        <motion.div

            initial={{ opacity: 0,y: 20 }}
            whileInView={{ y: 0,opacity: 1,transition: { duration: 1,delay: .5 } }}
        // style={{ overflow: 'scroll', scrollBehavior: 'smooth',border:'4px solid blue' }}
        >
            <Box overflowY="scroll" scrollBehavior="smooth">
                <VerticalTimeline lineColor='white' layout='1-column'>
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
                </VerticalTimeline>
            </Box>
        </motion.div>
    );
}
