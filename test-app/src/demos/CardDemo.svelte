<script>
  import Group from "../Group.svelte";
  import Row from "../Row.svelte";
  import {
    Card,
    CardHeader,
    CardImage,
    CardBody,
    CardActions,
    CardText,
  } from "@BBMD/Card";
  import { Button, IconButton } from "@BBMD";

  //TODO: Rows effecting height of cards, fix so this doesn't happen
  //TODO: Card text - could typography components not be used for this?
</script>

<Row title="Cards">
  <Card>
    <CardImage />
    <CardBody>
      <CardHeader
        title="My Card"
        subtitle="This is a story about my first ever card component" />
    </CardBody>
    <CardActions>
      <Button text="Read" />
      <Button text="Cancel" />
    </CardActions>
  </Card>

  <Card variant="outlined">
    <CardBody useHoverEffect={false}>
      <CardHeader
        title="Simple Outlined Card"
        subtitle="This card has no image and serves as a small clickable area with minimal information" />
    </CardBody>
    <CardActions>
      <IconButton icon="star" />
      <IconButton icon="share" />
    </CardActions>
  </Card>

  <Card>
    <CardBody>
      <CardHeader
        title="My Card"
        subtitle="This is a story about my first ever card component" />
      <CardText>
        I provide the supporting text for any of your cards. Use me whenever you
        need some textual content
      </CardText>
    </CardBody>
    <CardActions>
      <Button text="Read" />
      <Button text="Cancel" />
    </CardActions>
  </Card>
</Row>
