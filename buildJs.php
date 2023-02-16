<?php
// build the ckeditor 
shell_exec("cd \"D:\\repo_from_github\ckeditor\\\" && php buildJs.php");

// Function to Copy folders and files       

function rrmdir($dir)
{
    if (is_dir($dir)) {
        $objects = scandir($dir);
        foreach ($objects as $object) {
            if ($object != "." && $object != "..") {
                if (is_dir($dir . DIRECTORY_SEPARATOR . $object) && !is_link($dir . "/" . $object))
                    rrmdir($dir . DIRECTORY_SEPARATOR . $object);
                else
                    unlink($dir . DIRECTORY_SEPARATOR . $object);
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

$foldersNeedToCopy = [
    'D:\repo_from_github\email-builder\grapesjs-mjml\boostrap',
    'D:\repo_from_github\email-builder\grapesjs-mjml\dist',
    'D:\repo_from_github\email-builder\grapesjs-mjml\icon',
    'D:\repo_from_github\email-builder\grapesjs-mjml\jquery',
    'D:\repo_from_github\email-builder\grapesjs-mjml\locale',
    'D:\repo_from_github\email-builder\grapesjs-mjml\node_modules\grapesjs',
    'D:\repo_from_github\email-builder\grapesjs-mjml\node_modules\grapesjs-plugin-ckeditor',
    'D:\repo_from_github\email-builder\grapesjs-mjml\index.html',
    'D:\repo_from_github\email-builder\grapesjs-mjml\initGrapesjs.js'
];

$rootCopyDir = 'D:\repo_from_github\pro-builder\\';
foreach ($foldersNeedToCopy as $folder) {

    $lastFolder = basename($folder);
    echo $lastFolder . PHP_EOL;
    if (is_dir($folder)) {
        recurseCopy($folder, 'D:\repo_from_github\pro-builder', $lastFolder);
    } else {
        copy($folder, $rootCopyDir . $lastFolder);
    }
}
$nodeDir = 'D:\repo_from_github\pro-builder\node_modules';
if (!file_exists($nodeDir)) {
    mkdir($nodeDir);
}


$foldersNeedToMove = [
    'D:\repo_from_github\email-builder\grapesjs-mjml\node_modules\grapesjs',
    'D:\repo_from_github\email-builder\grapesjs-mjml\node_modules\grapesjs-plugin-ckeditor',
];
foreach ($foldersNeedToMove as $folder) {
    $lastFolder = basename($folder);
    echo $lastFolder . PHP_EOL;
    if (is_dir($folder)) {
        recurseCopy($folder, $nodeDir, $lastFolder);
    }
    rrmdir($rootCopyDir . $lastFolder);
}
$rootCopyDir = 'D:\forNewEma\ema\base\public\pro-builder';

$foldersNeedToMove = [
    'D:\repo_from_github\email-builder\grapesjs-mjml\dist',
    'D:\repo_from_github\email-builder\grapesjs-mjml\boostrap',
];
foreach ($foldersNeedToMove as $folder) {
    $lastFolder = basename($folder);
    if (is_dir($folder)) {
        recurseCopy($folder, $rootCopyDir, $lastFolder);
        echo $lastFolder . PHP_EOL;
    }
    // rrmdir($rootCopyDir . $lastFolder);
}


