import styled from 'styled-components';

export const WidgetWrapper = styled.div`
  width: 65rem;

  .vertical-tab__container {
    height: 35rem;
    overflow-y: auto;
  }

  .vertical-tab-wrapper {
    display: flex;
    flex-direction: column;
    margin: 4.004rem 0 0 5.4rem;
  }
`;

export const WidgetBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2.4rem;
  margin-top: 1.1rem;

  .btn-wrapper {
    width: 14rem;
    margin-bottom: 2.4rem;
  }
  .widget-btn {
    height: 4.8rem;
  }
`;
