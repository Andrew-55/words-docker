import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { Layout } from "@/components";
import { COLORS } from "@/styles";
import { Button } from "@/ui";
export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/verbs-couple");
  };

  return (
    <>
      <Head>
        <title>Words</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Root>
          <Button text="Найти пару" onClick={handleClick} />
          <StyledLink href="/verbs-table">
            Таблица неправильных глаголов
          </StyledLink>
        </Root>
      </Layout>
    </>
  );
}

const Root = styled.main`
  width: 100%;
  position: relative;
  width: 100%;
  padding: 32px 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  &:hover {
    color: ${COLORS.red};
  }
`;
