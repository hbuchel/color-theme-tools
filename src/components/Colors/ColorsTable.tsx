import { MiniTable } from '@/components/MiniTable';
import { TableCell, TableRow, Text } from '@aws-amplify/ui-react';
import { type WebDesignToken } from '@aws-amplify/ui'; 
import { Swatch } from '@/components/Swatch';

interface ColorsTableProps {
  items: WebDesignToken[];
}

export const ColorsTable = ({items}: ColorsTableProps) => {

  function renderRow(item: WebDesignToken) {
    return (
      <TableRow>
        <TableCell><Text as="span" color="tertiary">{item.path[2]}</Text></TableCell>
        <TableCell><Swatch initialColor={item.value}></Swatch></TableCell>
        <TableCell>{item.value}</TableCell>
      </TableRow>
    )
  }

  return (
    <MiniTable
      items={items}
      columns={['Token Name', 'Swatch', 'Value', 'Contrast']}
      renderRow={(item) => renderRow(item as any)}
    ></MiniTable>
  )
}