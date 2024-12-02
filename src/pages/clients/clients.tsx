import { StyledClientsListWrapper, StyledClientsWrapper } from "./styled-components/styled-clients";
import { useClients } from "../../api/access-control/queries";

export const Clients = () => {
  const { data: clientsData, isLoading } = useClients();
  return (
    <StyledClientsWrapper>
      <h4>Clients List</h4>
      <StyledClientsListWrapper>
        {isLoading && <div>Loading...</div>}
        {clientsData?.map(({ id, name }) => {
          return (
            <div role="group" key={id}>
              <b>Name:</b> {`${name}`} - <b>ID:</b> {`${id}`}
            </div>
          );
        })}
      </StyledClientsListWrapper>
    </StyledClientsWrapper>
  );
};
