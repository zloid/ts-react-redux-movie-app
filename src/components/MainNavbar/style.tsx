import styled from 'styled-components'

export const StyledBrand = styled.div`
    width: 50px;
    height: 41px;
    left: 12px;
    top: calc(50% - 41px / 2);
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #fff;
`

export const PageName = styled.div`
    // width: 148px;
    height: 22px;
    // margin-left: -50px;
    top: calc(50% - 22px / 2 + 0.5px);
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #fff;
    @media (min-width: 990px) {
        display: none;
    }
    margin: 0 auto;
    padding-right: 30px;
`

export const HidingMenu = styled.div`
    @media (max-width: 990px) {
        display: none;
    }
`

export const HidingNavLink = styled.span`
    @media (max-width: 990px) {
        display: none;
    }
`

export const StyledLInk = styled.span`
    color: #fff;
    margin-left: 20px;
    padding: 4px;
    border: 1px solid tomato;
    border-radius: 4px;
`

export const ToggleWrapper = styled.span`
    background: tomato;
    border-radius: 2px;
    margin-bottom: 16px;
`
