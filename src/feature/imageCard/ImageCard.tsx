import React from "react";
import { Card, Avatar, message, Tooltip } from "antd";
import {
  CopyOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IGif } from "@giphy/js-types";
import CopyToClipboard from "react-copy-to-clipboard";
import { State } from "../../redux/State";
import { DispatchTypes } from "../../redux/Actions";
import { connect } from "react-redux";
import { downloadAndShare } from "../../api/DownloadAndShare";
import './ImageCard.css';
const { Meta } = Card;



const copySuccess = (text: string = "Copied to clipboard!") => {
  message.success(text);
};

const mapStateToProps = (state: State) => ({
  canShare: navigator.share ? true: false
});

const mapDispatchToProps = (dispatch: DispatchTypes) => ({
  onShareTarget: async (title: string, url: string) => await downloadAndShare(title, url)
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & IGif;

const ImageCard = ({ id, title, images, user, onShareTarget, canShare }: Props) => {
  const { original } = images;
  const { url } = original;
  return (
    <Card
      key={id}
      style={{ width: 300 }}
      cover={<img alt={title} src={url} height={280} width={470} />}
      actions={[
        <ShareAltOutlined disabled={!canShare} className={!canShare ? "disabled_icon" : ""} onClick={() => 
          {
            if (canShare) {
              onShareTarget(title, url)
            }
          }
        } key="share-to"/>,
        <Tooltip
          title={`Copy ${
            title.length !== 0 ? title : "GIF"
          }'s url to the clipboard`}
        >
          <CopyToClipboard text={url} onCopy={() => copySuccess()}>
            <CopyOutlined key="copy-to-clipboard" />
          </CopyToClipboard>
        </Tooltip>
      ]}
    >
      <Meta
        avatar={<Avatar src={user?.avatar_url} icon={<UserOutlined />} />}
        title={title}
      />
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageCard);
