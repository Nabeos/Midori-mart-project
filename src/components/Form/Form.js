import React from 'react'
import styles from './Form.module.css';

export default function Form() {
    return (
        <div>
            {/* ĐÂY LÀ FORM MẪU */}
            <form className="container-fluid" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-4">
                        <div className="form-group">
                            <p className="font-weight-bold">Project ID</p>
                            <input value={values.id} disabled className="form-control" name="id" />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="form-group">
                            <p className="font-weight-bold">Project Name</p>
                            <input value={values.projectName} className="form-control" name="projectName" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="form-group">
                            <p className="font-weight-bold">Project Category</p>
                            <select className="form-control" name="categoryId" value={values.categoryId}>
                                {arrProjectCategory?.map((item, index) => {
                                    return <option key={index} value={item.id}>{item.projectCategoryName}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="form-group">
                            <p className="font-weight-bold">Description</p>
                            <Editor
                                name="description123"
                                initialValue={values.description}
                                value={values.description}
                                init={{
                                    height: 380,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
                                }}
                                onEditorChange={handleEditorChange}
                            />
                        </div>

                    </div>
                </div>
            </form>
        </div>



    )
}
