import styled from 'styled-components'

export const Info = styled.span`
    position: absolute;
    margin-left: -150px;
    margin-top: 6px;
`

export const InfoNotMobile = styled.span`
    @media (max-width: 990px) {
        display: none;
    } ;
`

export const InfoMobile = styled.span`
    @media (min-width: 990px) {
        display: none;
    } ;
`

export const MoreInfo = styled.span`
    position: absolute;
    margin-left: -150px;
    margin-top: 175px;
`

export const TooltipBadgeWrapper = styled.div`
    padding-top: 10px;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-top: 1px solid #fff;
`
