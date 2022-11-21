import React from 'react'
import CreatableReactSelect from 'react-select/creatable';
import { Col, Form, Stack, Row, Button } from 'react-bootstrap';

const NoteForm = () => {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>
                Title
              </Form.Label>
              <Form.Control required>

              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>
                Tags
              </Form.Label>
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>
            Body
          </Form.Label>
          <Form.Control required as="textarea" rows={15} />
        </Form.Group>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">Save</Button>
          <Button type="button" variant="outline-secondary">Cancel</Button>
        </Stack>
      </Stack>
    </Form>
  )
}

export default NoteForm;