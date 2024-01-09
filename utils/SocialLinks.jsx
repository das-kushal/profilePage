import { IconButton,Link } from "@chakra-ui/react"

const SocialLinks = ({ text,icon,href,external }) => {
    return (
        <IconButton
            variant={'link'}
            color={'white'}
            icon={icon}
            _hover={{ color: 'red' }}
            fontSize={'1.5rem'}
        // pt={10}


        >
            <Link href={href} isExternal >

                {text}
            </Link>
        </IconButton>
    )
}

export default SocialLinks