import React from "react";
import { Card, Avatar, message, Tooltip } from "antd";
import {
  CopyOutlined,
  LikeOutlined,
  DislikeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IGif } from "@giphy/js-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
const { Meta } = Card;

const copySuccess = (text: string = "Copied to clipboard!") => {
  message.success(text);
};

const ImageCard = ({ id, title, images, user }: IGif) => {
  const { original } = images;
  const { url } = original;
  return (
    <Card
      key={id}
      style={{ width: 300 }}
      cover={<img alt={title} src={url} height={280} width={470} />}
      actions={[
        <LikeOutlined key="like" />,
        <DislikeOutlined key="dislike" />,
        <Tooltip
          title={`Copy ${
            title.length !== 0 ? title : "GIF"
          }'s url to the clipboard`}
        >
          <CopyToClipboard text={url} onCopy={() => copySuccess()}>
            <CopyOutlined key="copy-to-clipboard" />
          </CopyToClipboard>
        </Tooltip>,
      ]}
    >
      <Meta
        avatar={<Avatar src={user?.avatar_url} icon={<UserOutlined />} />}
        title={title}
      />
    </Card>
  );
};

export default ImageCard;
