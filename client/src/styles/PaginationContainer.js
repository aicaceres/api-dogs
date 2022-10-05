import styled from 'styled-components'

const PaginationContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    list-style-type: none;
    & li{
        padding: 0 12px;
        height: 32px;
        text-align: center;
        margin: auto 4px;
        color: rgba(0, 0, 0, 0.87);
        display: flex;
        box-sizing: border-box;
        align-items: center;
        letter-spacing: 0.01071em;
        border-radius: 16px;
        line-height: 1.43;
        font-size: 13px;
        min-width: 32px;
        cursor: pointer;
        &:hover{
            background-color: rgba(0, 0, 0, 0.04);
        }
        &.selected {
            background-color: rgba(0, 0, 0, 0.08);
        }
        .arrow {
            &::before {
                position: relative;
                content: '';
                /* By using an em scale, the arrows will size with the font */
                display: inline-block;
                width: 0.4em;
                height: 0.4em;
                border-right: 0.12em solid rgba(0, 0, 0, 0.87);
                border-top: 0.12em solid rgba(0, 0, 0, 0.87);
            }

            &.left {
                transform: rotate(-135deg) translate(-50%);
            }

            &.right {
                transform: rotate(45deg);
            }
        }
        .double {
            &::before {
                border-right: 0.3em double rgba(0, 0, 0, 0.87);
                border-top: 0.3em double rgba(0, 0, 0, 0.87);
            }
        }
        &.disabled {
            pointer-events: none;

            .arrow::before {
                border-right: 0.12em solid rgba(0, 0, 0, 0.43);
                border-top: 0.12em solid rgba(0, 0, 0, 0.43);
            }
            .double::before {
                border-right: 0.3em double rgba(0, 0, 0, 0.43);
                border-top: 0.3em double rgba(0, 0, 0, 0.43);
            }

            &:hover {
                background-color: transparent;
                cursor: default;
            }
        }
    }
`

export default PaginationContainer