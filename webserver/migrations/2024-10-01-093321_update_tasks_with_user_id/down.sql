-- This file should undo anything in `up.sql`
DROP INDEX IF EXISTS idx_tasks_user_id;
DROP INDEX IF EXISTS idx_tasks_project_id;

ALTER TABLE tasks
DROP COLUMN user_id,
DROP COLUMN project_id;