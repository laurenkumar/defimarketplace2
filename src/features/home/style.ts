import styled from 'styled-components';

const HomePageContentStyle = styled.div`
  text-align: center;
  padding-top: 20px;
  min-height: 100vh;
  display: grid;
  grid-auto-rows: 400px;
  grid-gap: 30px;
  grid-template-columns: repeat(3, minmax(200px, 300px));
  justify-content: center;
  align-items: stretch;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    margin: 50px 30px;
  }
  .card {
    position: relative;
    padding: 10px;
    background: white;
    display: grid;
    color: #000 !important;
    grid-template-rows: 8fr 1fr 1fr;
    box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.057);
    transition: 0.2s ease-in;
    .card-content {
      .top-bar {
        width: calc(100% - 40px);
        position: absolute;
        top: 0;
        left: 0;
        padding: 20px;
        span {
          color: #000 !important;
        }
        .float-right {
          float: right;
        }
      }
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .img {
        width: 100%;
        justify-content: bottom;
        align-content: bottom;
        text-align: center;
        img {
          max-width: 100%;
          max-height: 220px;
        }
      }
    }
    .card-description {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 0.1em;
      width: calc(100%-20px);
      .title {
        text-transform: uppercase;
        text-align: left;
      }
      .cart {
        float: right;
        cursor: pointer;
      }
    }
    .card-footer {
      text-transform: uppercase;
      padding: 0.3em;
      border-top: 0.5px solid #ececec;
      letter-spacing: 0.1em;
      font-size: 11px;
      color: white;
      justify-items: left;
      align-items: center;
      display: flex;
      .span {
        margin: 5px;
        width: auto;
        background: #dedede;
        padding: 4px 7px;
        border-radius: 2px;
        font-weight: 100;
        cursor: pointer;
        &:hover {
          background: #aaaaaa;
        }
      }
    }
    &:hover {
      transition: 0.2s ease-in;
      transform: translateY(-10px);
      box-shadow: 0px 45px 60px 0px rgba(0, 0, 0, 0.087);
    }
  }
`;
export default HomePageContentStyle;
