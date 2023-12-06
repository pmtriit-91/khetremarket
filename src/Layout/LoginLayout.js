import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss'

const { Content } = Layout;
class LoginLayout extends React.PureComponent {
	render() {
		return (
			<Layout className="login-layout">
				<Content style={{ height: '100%' }}>
					<Outlet />
				</Content>
			</Layout>
		);
	}
}

LoginLayout.propTypes = {
	title: PropTypes.string
};
export default LoginLayout;
