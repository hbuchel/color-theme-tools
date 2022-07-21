import { Fragment} from 'react';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@aws-amplify/ui-react';
import { type TableProps } from '@aws-amplify/ui-react';

interface MiniTableProps extends TableProps {
  items: {}[];
  columns: string[];
  renderRow: (item: {}) => React.ReactNode;
}

export const MiniTable = ({items, columns, renderRow, ...rest}: MiniTableProps) => {
  return (
    <Table className="mini-table" size="small" {...rest}>
      <TableHead className="amplify-visually-hidden">
        <TableRow>
          {
            columns.map((column, index) => {
              return (
                <TableCell as="th" key={`column-${index}`}>{column}</TableCell>
              )
            })
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {
          items.map((item, index) => {
            return (
              <Fragment key={`row-${index}`}>
                { renderRow(item) }
              </Fragment>
            )
          })
        }
      </TableBody>
      
    </Table>
  )
}