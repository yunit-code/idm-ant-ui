import Tree from './Tree';
import DirectoryTree from './DirectoryTree';
import Base from '../base';

Tree.TreeNode.name = 'ATreeNode';
Tree.DirectoryTree = DirectoryTree;
/* istanbul ignore next */
Tree.install = function(Vue) {
  Vue.use(Base);
  Vue.component("Idm"+Tree.name, Tree);
  Vue.component("Idm"+Tree.TreeNode.name, Tree.TreeNode);
  Vue.component("Idm"+DirectoryTree.name, DirectoryTree);
};

export default Tree;
