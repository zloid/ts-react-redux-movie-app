import styled from 'styled-components'

export const MainSectionDiv = styled.div`
    border: 1px solid gold;
    padding: 10px;
    /* max-width: 100px; */
    /* height: 1000px; */
`

export const HidingSearchOnMobile = styled.span`
    @media (max-width: 990px) {
        display: none;
    } ;
`
