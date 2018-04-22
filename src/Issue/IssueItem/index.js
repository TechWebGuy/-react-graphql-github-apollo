import React from 'react';
import { withState } from 'recompose';

import Button from '../../Button';
import CommentList from '../../Comment';
import Link from '../../Link';

import './style.css';

const Issue = ({
  issue,
  repositoryOwner,
  repositoryName,
  isShowComments,
  onShowComments,
}) => (
  <div className="IssueItem">
    <Button onClick={() => onShowComments(!isShowComments)}>
      {isShowComments ? '-' : '+'}
    </Button>

    <div className="IssueItem-content">
      <h3>
        <Link href={issue.url}>{issue.title}</Link>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />

      {isShowComments && (
        <CommentList
          repositoryOwner={repositoryOwner}
          repositoryName={repositoryName}
          issue={issue}
        />
      )}
    </div>
  </div>
);

export default withState('isShowComments', 'onShowComments', false)(
  Issue,
);
