import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'inactive-post',
    component: InactivePostsComponent,
  },
  {
    path: 'active-post',
    component: ActivePostsComponent,
  },
  {
    path: 'post-detail/:id',
    component: PostDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
