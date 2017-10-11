import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { Button } from 'antd';
import s from './Home.css';

//
const actionTest = dispatch => dispatch =>
  dispatch({
    type: 'SET_RUNTIME_VARIABLE',
    payload: `fadi${Math.random() * 10}`,
  });
class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };
  changeRuntime = () => {
    this.props.actionTest();
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React.js News</h1>
          <h2>
            {this.props.runtime.name}
          </h2>
          <Button type="primary" onClick={this.changeRuntime}>
            Change
          </Button>
          {this.props.news.map(item =>
            <article key={item.link} className={s.newsItem}>
              <h1 className={s.newsTitle}>
                <a href={item.link}>
                  {item.title}
                </a>
              </h1>
              <div
                className={s.newsDesc}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </article>,
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ runtime }) => ({ runtime });
const HomeStyled = withStyles(s)(Home);
export default connect(mapStateToProps, { actionTest })(HomeStyled);
