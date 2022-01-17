import { Provider as WalletProvider, chain, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { styled, globalCss } from "@/stitches.config";
import type { AppProps } from "next/app";
import { Button } from "@cabindao/topo";
import { useAccount } from "wagmi";
import WalletAddress from "@/components/WalletAddress";
import WalletAuth, { useWallet } from "@/components/WalletAuth";

const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "$sans",
    color: "$forest",
    backgroundColor: "$sand",
  },
  a: {
    color: "$forest",
    "&:hover": {
      opacity: 0.5,
    },
  },
});

const Wrapper = styled("div", {
  margin: "0 auto",
  maxWidth: 740,
  width: "100%",
  marginBottom: "$12",
});

const Header = styled("header", {
  display: "flex",
  flexDirection: "row",
  padding: "$2",
});

const DaoCampLogo = styled("h2", {
  margin: 0,
  padding: 0,
  fontSize: "1.5rem",
  color: "$forest",
});

const MainContainer = styled("div", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

const Footer = styled("footer", {
  marginTop: "auto",
  paddingTop: "$8",
  paddingBottom: "$40",
  backgroundColor: "$forest",
  color: "$sand",
  textAlign: "center",
  "& a": {
    color: "$sand",
  },
});

const FooterHeading = styled("p", {
  fontWeight: "$regular",
});
const FooterSubtitle = styled("p", {
  fontWeight: "$light",
});

const UserActions = styled("div", {
  marginLeft: "auto",
  paddingRight: "$12",
  display: "flex",
  flexDirection: "row",
  columnGap: "$4",
});

const Nav = styled("nav", {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "$4",
});

const alchemyId = process.env.ALCHEMY_API_KEY;
const chains = defaultChains;

const connectors = [new InjectedConnector({ chains: defaultChains })];

const ProfileLink = () => {
  const { address, ens } = useWallet();
  if (!address) return null;
  return (
    <Button type="link">
      <WalletAddress address={address} ens={ens} />
    </Button>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <WalletProvider autoConnect connectors={connectors}>
      <MainContainer>
        <Header>
          <DaoCampLogo>#dao-camp</DaoCampLogo>
          <Nav>
            <Button type="link">Link</Button>
            <ProfileLink />
          </Nav>
          <UserActions>
            <Button tone="wheat">Submit a Link</Button>
            <WalletAuth />
          </UserActions>
        </Header>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
        <Footer>
          {/* <Logo variant="logomark" color="sprout" /> */}
          <div>cabin logo</div>
          <FooterHeading>
            Made with care by <a href="https://www.creatorcabins.com/">Cabin</a>
          </FooterHeading>
          <FooterSubtitle>
            Special thanks to creators Xxxx, Xxxx, Xxxx, &amp; more.
          </FooterSubtitle>
        </Footer>
      </MainContainer>
    </WalletProvider>
  );
}

export default MyApp;
