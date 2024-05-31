"use client";

import { Fragment } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function AddNewBlog({
  openBlogDialog,
  setOpenBlogDialog,
  loading,
  handleSaveBlogData,
  blogFormData,
  setBlogFormData,
  currentEditedBlogID,
  setCurrentEditedBlogID,
}) {
  return (
    <Fragment>
      <div>
        <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
      </div>
      <Dialog
        open={openBlogDialog}
        onOpenChange={() => {
          setOpenBlogDialog(false);
          setBlogFormData({
            title: "",
            description: "",
          });
          setCurrentEditedBlogID(null);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {currentEditedBlogID ? "Edit Blog" : "Add New Blog"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                value={blogFormData.title}
                onChange={(event) =>
                  setBlogFormData({
                    ...blogFormData,
                    title: event.target.value,
                  })
                }
                placeholder="Enter blog title"
                className="col-span-3 "
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              {" "}
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                value={blogFormData.description}
                onChange={(event) => {
                  setBlogFormData({
                    ...blogFormData,
                    description: event.target.value,
                  });
                }}
                className="col-span-3 "
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSaveBlogData}>
              {loading ? "Saving changes" : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
