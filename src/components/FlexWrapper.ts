import styled from "styled-components";

type WrapperPropsType = {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial'
    gap?: string
}

export const Wrapper = styled.div<WrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '0'};
  height: 100%;
`