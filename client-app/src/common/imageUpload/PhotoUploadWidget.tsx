import { useState } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import PhotoWidgetDropzone from "./PhotoWidgetDropzone";

export default function PhotoUploadWidget() {
  const [files, setFiles] = useState<any>([]);

  return (
    <Grid>
      <Grid.Column width={4}>
        <Header color="teal" sub content="Step 1 - Add Photo" />
        <PhotoWidgetDropzone setFiles={setFiles} />
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color="teal" sub content="Step 2 - Resize Photo" />
        {files && files.length > 0 && <Image src={files[0].preview} />}
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color="teal" sub content="Step 3 - Preview & Upload Photo" />
      </Grid.Column>
    </Grid>
  );
}

/*
<Grid.Column width={4}>
        <Header color="teal" sub content="Step 1 - Add Photo" />
        <DropzoneInput setFiles={setFiles} />
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color="teal" sub content="Step 2 - Resize image" />
        {files && files.length > 0 && (
          <PhotoWidgetCropper setFiles={setFiles} imagePreview={files[0].preview} />
        )}
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color="teal" sub content="Step 3 - Preview & Upload" />
        {files && files.length > 0 && (
          <>
            <div className="img-preview" style={{ minHeight: 200, overflow: "hidden" }} />
            <Button.Group widths={2}>
              <Button loading={loading} onClick={handleUploadImage} positive icon="check" />
              <Button disabled={loading} onClick={() => setFiles([])} icon="close" />
            </Button.Group>
          </>
        )}
      </Grid.Column>
      */
