const dropboxV2Api = require("dropbox-v2-api");
const fs = require("fs");

const token = "sl.BWcMSC7F1hXGgaX75BSeu1ZBpm6E_dwj33wTuPJGtsJnmo_cI9ytZphjsCy6CzkqI4EfUKxUXWZWR4sxYRjvTm__OrMYAUU-Sj84og_6_PSUZQmIP6P7OVuvilZSaTdht35-9LI";

let dropbox;



class Dropbox {
	instance: typeof dropboxV2Api;

	constructor(TOKEN: string) {
		this.instance = dropboxV2Api.authenticate({
			token: TOKEN
		});
	}

	createFolder(dirPath: string, callback: (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => void) {
		this.instance({
			resource: 'test/create_folder',
			parameters: {
				path: dirPath
			}
		}, callback);

		return 'success';
	}

	getMetadata(filePath: string, callback: (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => void) {
		this.instance({
			resource: 'test/upload',
			parameters: {
				path: filePath
			},
			readStream: fs.createReadStream(filePath)
		}, callback);

		return 'success';
	}
	upload(filePath: string, callback: (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => void) {
		this.instance({
			resource: 'test/upload',
			parameters: {
				path: filePath
			},
			readStream: fs.createReadStream(filePath)
		}, callback);

		return 'success';
	}
	delete(filePath: string, callback: (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => void) {
		this.instance({
			resource: 'test/delete',
			parameters: {
				'path': filePath
			}
		}, callback);

		return 'success';
	}
}



describe("dropbox requests", function () {
  beforeAll(function () {
      dropbox = new Dropbox(token);
  });

    describe("FilesManipulation", () => {
        const dirName = "test";
        const dirPath = "./" + dirName;
        const fileName = "test.txt";
        const filePath = dirPath + "/" + fileName;
        
    it("create_folder", (done) => {
      dropbox.createFolder(dirPath, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('name', dirName);
				done();
			});
    });
        
    it("get_metadata", (done) => {
      dropbox.getMetadata(dirPath, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('.tag', 'folder');
				result.should.have.property('path_lower', dirPath);
				done();
			});
    });
        
    it("upload", (done) => {
      dropbox.upload(filePath, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('path_lower', filePath);
				done();
			});
    });
        
    it("delete", (done) => {
      dropbox.delete(filePath, (err: any, result: { should: { have: { property: (arg0: string, arg1: string) => void; }; }; }) => {
				if (err) { throw err; }
				result.should.have.property('path_lower', filePath);
				done();
			});
    });
  });
});
