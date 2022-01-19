import { styled } from "@/stitches.config";
import Link from "next/link";
import { useState } from "react";
import { ClockIcon, SpeechIcon } from "@/components/Icons";
import Upvote from "@/components/Upvote";
import WalletAddress from "../WalletAddress";

const PostRow = styled("div", {
  display: "flex",
  columnGap: "$2",
});
const PostInfo = styled("div", {
  flex: 1,
  // display: "flex",
  // flexDirection: "column",
});
const Title = styled("div", {
  fontWeight: "$regular",
  "& a": {
    textDecoration: "none",
  },
});

const PostMeta = styled("div", {
  fontSize: "$xs",
  display: "flex",
  flexFlow: "row wrap",
  gap: "$2",
  alignItems: "baseline",
});

const DomainText = styled("span", {
  fontWeight: "$regular",
});

const MetaAddress = styled("span", {
  fontFamily: "$mono",
});

const IconText = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "$1",
});

export interface PostProps {
  title: string,
  domainText: string,
  url: string,
  walletAddress: string,
  submissionDate: number,
  numberOfComments: number,
}
const Post = ({ title, url, domainText, walletAddress, submissionDate, numberOfComments }: PostProps) => {
  const [upvoted, setUpvoted] = useState(false);

  return (
    <PostRow>
      <div>
        <Upvote upvoted={upvoted} onClick={() => setUpvoted((prev) => !prev)} />
      </div>
      <PostInfo>
        <Title>
          <a href={url}>{title}</a>
        </Title>
        <PostMeta>
          <DomainText>{domainText}</DomainText>
          <MetaAddress>
            via{" "}
            <Link href={`/address/${walletAddress}`}>
              <a title={`View profile of ${walletAddress}`}>
                <WalletAddress address={walletAddress} />
              </a>
            </Link>
          </MetaAddress>
        </PostMeta>
        <PostMeta>
          <IconText>
            <ClockIcon /> {submissionDate} hours ago
          </IconText>
          <IconText>
            <SpeechIcon /> {numberOfComments.toString()} comments
          </IconText>
        </PostMeta>
      </PostInfo>
    </PostRow>
  );
};

export default Post;
