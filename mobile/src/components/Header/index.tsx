import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, Contemt, OrderHeader, Table } from './styles';

interface HeaderProps {
  selectTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      {!selectTable && (
        <>
          <Text size={14} opacity={0.9}>
            Bem vindo(a) ao
          </Text>

          <Text size={24} weight="700">
            WAITER
            <Text size={24}>APP</Text>
          </Text>
        </>
      )}

      {selectTable && (
        <Contemt>
          <OrderHeader>
            <Text size={24} weight="600">
              Pedido
            </Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text color="#D73035" size={14} weight="600">
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color="#666">Mesa {selectTable}</Text>
          </Table>
        </Contemt>
      )}
    </Container>
  );
}
