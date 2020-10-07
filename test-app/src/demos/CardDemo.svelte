<script>
  import Row from "../Row.svelte";
  import {
    Card,
    CardImage,
    CardContent,
    CardActions,
    PrimaryAction,
    ActionButtons,
    ActionIcons,
  } from "@BBMD/Card";
  import { Button, IconButton, H6, Body2 } from "@BBMD";

  import src from "../images/sunny-day.jpg";
  import forest from "../images/dark-forest.jpg";

  //TODO: Rows effecting height of cards, fix so this doesn't happen
  //TODO: Card text - could typography components not be used for this?
</script>

<Row title="Simple Cards">
  <Card>
    <CardContent>
      <H6>A Simple Card</H6>
      <Body2>with some supporting text</Body2>
    </CardContent>
  </Card>

  <Card variant="outlined">
    <PrimaryAction>
      <CardContent primaryAction>
        <H6>Outlined Card with Primary Action</H6>
        <Body2>hover effects to show the body is clickable</Body2>
      </CardContent>
    </PrimaryAction>
  </Card>

  <!-- A card with button actions -->
  <Card variant="outlined">
    <CardContent>
      <H6>A Card with Actions</H6>
      <Body2>button actions to trigger related actions</Body2>
    </CardContent>
    <CardActions>
      <Button text="Action 1" />
      <Button text="Action 2" />
    </CardActions>
  </Card>

  <!-- A card wih action buttons and icons -->
  <Card variant="outlined">
    <CardContent>
      <H6>A Card with Multiple Actions</H6>
      <Body2>use of icon buttons and normal buttons</Body2>
    </CardContent>
    <CardActions>
      <ActionButtons>
        <Button text="Action 1" />
        <Button text="Action 2" />
      </ActionButtons>
      <ActionIcons>
        <IconButton icon="add_shopping_cart" />
        <IconButton icon="share" />
      </ActionIcons>
    </CardActions>
  </Card>
</Row>

<Row style="align-items: flex-end;" title="Complex Cards">
  <!-- A card with header, media and content -->
  <Card variant="outlined" width="350px">
    <CardContent>
      <H6>A Multi Content Card</H6>
    </CardContent>
    <PrimaryAction>
      <CardImage url={src} />
      <CardContent>
        <Body2>
          this card has multiple content types including an image, header, body
          text and actions.
        </Body2>
      </CardContent>
    </PrimaryAction>
    <CardActions>
      <Button text="Action 1" />
      <Button text="Action 2" />
    </CardActions>
  </Card>

  <!-- A card with image and image content -->
  <Card variant="outlined" width="350px">
    <PrimaryAction>
      <CardImage url={forest}>
        <H6>Image Headline</H6>
        <Body2>stunning views of mountain peaks</Body2>
      </CardImage >
      <CardContent>
        <Body2>This card has text content embedded within its image</Body2>
      </CardContent>
    </PrimaryAction>
    <CardActions>
      <Button text="Action 1" />
      <Button text="Action 2" />
    </CardActions>
  </Card>
</Row>
