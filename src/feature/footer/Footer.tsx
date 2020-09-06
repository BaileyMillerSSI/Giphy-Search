import React from 'react';
import { Avatar, Typography, Divider } from 'antd';
const { Link } = Typography;

const SiteFooter = () =>
<div>
    <Divider>Thanks for scrolling this far!</Divider>
    <Link href='https://github.com/BaileyMillerSSI/Giphy-Search' target='_blank'>
        <Avatar src='https://github.com/BaileyMillerSSi.png?size=200'>BaileyMillerSSI</Avatar>
        View this project on GitHub
    </Link>
</div>

export default SiteFooter;