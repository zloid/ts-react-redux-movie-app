import { useLocation } from 'react-router-dom'

export const useLocationPathname = () => {
    const location = useLocation()
    /* /animation -> Animation */
    const preparedLocation = location.pathname
        .replace(/\//g, '')
        .replace(/[a-z]/, (match) => match.toUpperCase())

    return preparedLocation
}
