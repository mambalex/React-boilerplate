import React, { useEffect } from 'react';
import './styles/HomePage.scss';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { SEO } from 'components';
import { RootState } from 'types';
import { fetchAllPostsActions } from 'store/actions';
import { headerMeta } from 'constants/index';

const HomePage = () => {
  const { posts } = useSelector((state: RootState) => state.post, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPostsActions.request());
  }, [dispatch]);
  return (
    <Container className="pt-5">
      <SEO {...headerMeta.home} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Accordion defaultActiveKey="0">
            {posts.map((post) => (
              <Card key={post.id}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={post.id.toString()}
                >
                  {post.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={post.id.toString()}>
                  <Card.Body>{post.body}</Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export { HomePage };
