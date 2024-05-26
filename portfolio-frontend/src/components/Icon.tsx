import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IconProps {
    icon?: any
}

const Icon: React.FC<IconProps> = ({ icon }) => {
    return (
        <>
            &nbsp;<FontAwesomeIcon icon={icon} />&nbsp;
        </>
    )
}

export default Icon