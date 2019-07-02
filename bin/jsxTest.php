<?php

class JsxCompiler
{
    private $node       = '/opt/node-v10.16.0-linux-x64/bin/node';
    private $babel      = './node_modules/.bin/babel';

    private function command(string $fromFile, $toFile)
    {
        if (file_exists($fromFile)) {
            $command = $this->node . ' ' . $this->babel . ' --plugins @babel/plugin-transform-react-jsx ' . $fromFile . ' -o ' . $toFile;
            shell_exec($command);
            echo PHP_EOL.'executed : `'.$command.'`';
        }
    }

    public function compil(string $dir, string $toDir)
    {
        $iterator = new IteratorIterator(new RecursiveDirectoryIterator($dir));

        /**
         * @var string      $name
         * @var SplFileInfo $file
         */
        foreach ($iterator as $name => $file) {
            if ($file->isFile()) {
                self::command($file->getRealPath(), $toDir.DIRECTORY_SEPARATOR.$file->getBasename());
            } elseif ($file->isDir() && !in_array($file->getBasename(), ['..', '.'])) {
                $newFolder = $toDir.DIRECTORY_SEPARATOR.$file->getBasename();

                if (!is_dir($newFolder)) {
                    mkdir($newFolder);
                }

                self::compil($file->getPathname(), $newFolder);
            }
        }
    }
}

if (!isset($argv[1]) || !isset($argv[2])) {
    die('Vous devez préciser le fichier source et le fichier cible');
}

(new JsxCompiler)->compil($argv[1], $argv[2]);

echo PHP_EOL;