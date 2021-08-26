import React, { useEffect, useRef } from "react";

function Editor({ onChange, editorLoaded, name, value }) {
	const editorRef: any = React.useRef();
	const { CKEditor, ClassicEditor }: any = editorRef.current || {};

	React.useEffect(() => {
		editorRef.current = {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
			ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
		};
	}, []);

	return (
		<div>
			{editorLoaded ? (
				<CKEditor
					type=""
					name={name}
					editor={ClassicEditor}
					data={value}
					onChange={(event, editor) => {
						const data = editor.getData();
						// console.log({ event, editor, data })
						onChange(data);
					}}
				/>
			) : (
				<div>Editor loading</div>
			)}
		</div>
	);
}

export default Editor;
