import React from 'react';
import { Avatar, Typography, Divider } from 'antd';
const { Link } = Typography;

const SiteFooter = () =>
<div>
    <Divider>Thanks for scrolling this far!</Divider>
    <Link href='https://github.com/BaileyMillerSSI/Giphy-Search' target='_blank'>
        <Avatar src='https://avatars3.githubusercontent.com/u/14271740?s=460&u=1f64b2115fcebdaa7e088cd69174a14a30fe6aee&v=4'>BaileyMillerSSI</Avatar>
        View this project on GitHub
    </Link>
</div>

export default SiteFooter;