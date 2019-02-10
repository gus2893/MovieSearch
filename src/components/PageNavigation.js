import React, { Component } from 'react';
import { Grid, Pagination } from 'semantic-ui-react';

export default class PageNavigation extends Component {
  state = {
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: false,
    showPreviousAndNextNav: false,
    totalPages: null,
  }

  handlePaginationChange = (e, { activePage }) => {
      
      this.setState({ activePage })
      this.props.changePage(activePage);
    }
  
  componentWillReceiveProps = () => {
      this.setState({showPreviousAndNextNav : true});
      this.setState({activePage: this.props.currentPage});
      this.setState({totalPages: this.props.totalPages});
  }
  
  render() {
    
    const {
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages,
    } = this.state

    return (
      <Grid columns={1}>
        <Grid.Column>
          <Pagination
            activePage={activePage}
            boundaryRange={boundaryRange}
            onPageChange={this.handlePaginationChange}
            size='mini'
            siblingRange={siblingRange}
            totalPages={totalPages}
            // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
            ellipsisItem={showEllipsis ? undefined : null}
            firstItem={showFirstAndLastNav ? undefined : null}
            lastItem={showFirstAndLastNav ? undefined : null}
            prevItem={showPreviousAndNextNav ? undefined : null}
            nextItem={showPreviousAndNextNav ? undefined : null}
          />
        </Grid.Column>
      </Grid>
    )
  }
}