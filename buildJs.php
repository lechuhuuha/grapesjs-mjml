<?php

// build the ckeditor

// Function to Copy folders and files

function rrmdir($dir)
{
    if (is_dir($dir)) {
        $objects = scandir($dir);
        foreach ($objects as $object) {
            if ($object != '.' && $object != '..') {
                if (is_dir($dir . DIRECTORY_SEPARATOR . $object) && !is_link($dir . '/' . $object)) {
                    rrmdir($dir . DIRECTORY_SEPARATOR . $object);
                } else {
                    unlink($dir . DIRECTORY_SEPARATOR . $object);
                }
            }
        }
        rmdir($dir);
    }
}
function recurseCopy(
    string $sourceDirectory,
    string $destinationDirectory,
    string $childFolder = ''
): void {
    $directory = opendir($sourceDirectory);

    if (is_dir($destinationDirectory) === false) {
        mkdir($destinationDirectory);
    }

    if ($childFolder !== '') {
        if (is_dir("$destinationDirectory/$childFolder") === false) {
            mkdir("$destinationDirectory/$childFolder");
        }

        while (($file = readdir($directory)) !== false) {
            if ($file === '.' || $file === '..') {
                continue;
            }

            if (is_dir("$sourceDirectory/$file") === true) {
                recurseCopy("$sourceDirectory/$file", "$destinationDirectory/$childFolder/$file");
            } else {
                copy("$sourceDirectory/$file", "$destinationDirectory/$childFolder/$file");
            }
        }

        closedir($directory);

        return;
    }

    while (($file = readdir($directory)) !== false) {
        if ($file === '.' || $file === '..') {
            continue;
        }

        if (is_dir("$sourceDirectory/$file") === true) {
            recurseCopy("$sourceDirectory/$file", "$destinationDirectory/$file");
        } else {
            copy("$sourceDirectory/$file", "$destinationDirectory/$file");
        }
    }

    closedir($directory);
}
$currentDir = __DIR__;
$foldersNeedToCopy = [
    $currentDir . '\boostrap',
    $currentDir . '\dist',
    $currentDir . '\icon',
    $currentDir . '\jquery',
    $currentDir . '\locale',
    $currentDir . '\node_modules\grapesjs',
    $currentDir . '\node_modules\grapesjs-plugin-ckeditor',
    $currentDir . '\node_modules\moment',
    $currentDir . '\index.html',
    $currentDir . '\initGrapesjs.js',
];

$rootCopyDir = $currentDir . '\pro-builder\\';
foreach ($foldersNeedToCopy as $folder) {

    $lastFolder = basename($folder);
    echo $lastFolder . PHP_EOL;
    if (is_dir($folder)) {
        recurseCopy($folder, $currentDir . '\pro-builder', $lastFolder);
    } else {
        copy($folder, $rootCopyDir . $lastFolder);
    }
}
$nodeDir = $currentDir . '\pro-builder\node_modules';
if (!file_exists($nodeDir)) {
    mkdir($nodeDir);
}

$foldersNeedToMove = [
    $currentDir . '\node_modules\grapesjs',
    $currentDir . '\node_modules\grapesjs-plugin-ckeditor',
    $currentDir . '\node_modules\moment',
];
foreach ($foldersNeedToMove as $folder) {
    $lastFolder = basename($folder);
    echo $lastFolder . PHP_EOL;
    if (is_dir($folder)) {
        recurseCopy($folder, $nodeDir, $lastFolder);
    }
    rrmdir($rootCopyDir . $lastFolder);
}
$rootCopyDir = $currentDir . '\pro-builder';

$foldersNeedToMove = [
    $currentDir . '\dist',
    $currentDir . '\boostrap',
];
foreach ($foldersNeedToMove as $folder) {
    $lastFolder = basename($folder);
    if (is_dir($folder)) {
        recurseCopy($folder, $rootCopyDir, $lastFolder);
        echo $lastFolder . PHP_EOL;
    }
}

$foldersNeedToCopy = [
    $currentDir . '\grapesjs-plugin-ckeditor.min.js',
];

$rootCopyDir = $currentDir . '\pro-builder\node_modules\grapesjs-plugin-ckeditor\dist\\';
foreach ($foldersNeedToCopy as $folder) {
    $lastFolder = basename($folder);
    echo $lastFolder . PHP_EOL;
    copy($folder, $rootCopyDir . $lastFolder);
}
