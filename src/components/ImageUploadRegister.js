import React, { Component } from 'react'
class ImageUploadRegister extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imageUrl: null,
            imageAlt: null,
            redirect: false,
        }
    }

    handleImageUpload = () => {
      
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        // replace this with your upload preset name
        formData.append('upload_preset', 'ml_default')
        const options = {
          method: 'POST',
          body: formData,
        };

        return fetch('https://api.Cloudinary.com/v1_1/dok4pz3i3/image/upload', options)
          .then(res => res.json())
          .then(async(res) => {
              const link = res.url;
              if(!link){
                alert('Must choose a file to upload!')
                return
              }
             
                 
                 this.props.photo(link)
              
           
              
            })
          
  }

    render() { 
        const { imageUrl, imageAlt } = this.state;
        return ( 
            <div>
                <section className="left-side">
                    <form>
                    <div className="choosePicForm">
                      <div id="choose-file-btn-div" class="btn btn-light">
                        <div id="choose-file-sub-div">choose file</div>
                        <input id="choose-file-btn" className="chooseFile" type="file" class="hide_file"/>
                      </div>

                        <div>
                          <button type="button" className="submitPhoto btn btn-light" onClick={this.handleImageUpload}>Submit</button>
                        </div>
                      </div>
                    </form>
                </section>
                <section className="right-side">
                    {imageUrl && (
                    <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
                    )}
                </section>
            </div>
        );
    }
}
 
export default ImageUploadRegister;