import { Layout, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100dvh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1>Новости</h1>
      </Header>
      <Content style={{ padding: "24px" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: "100%",
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};
