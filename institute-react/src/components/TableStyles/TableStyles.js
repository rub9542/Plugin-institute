import styled from 'styled-components'
import { Table } from 'antd'
import { COLORS } from 'theme'

export const StyledTable = styled(Table)`
  padding: 0 20px;
  .ant-table-thead {
    height: 60px;
  }
  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    content: none;
  }
  tr {
    th {
      background: ${COLORS.PRIMARY_GREY_T_98};
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${COLORS.GREY_T_30};

      ::before {
        height: 0px;
      }
    }
  }

  .ant-table-pagination.ant-pagination {
    justify-content: center;
  }
`
