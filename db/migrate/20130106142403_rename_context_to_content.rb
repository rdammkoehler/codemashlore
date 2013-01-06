class RenameContextToContent < ActiveRecord::Migration
  def up
    rename_column :lores, :context, :content
  end

  def down
    rename_column :lores, :content, :context
  end
end
