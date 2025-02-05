import os
import shutil

def organize_files(source_folder):
    # Получаем список всех файлов в указанной папке
    files = [f for f in os.listdir(source_folder) if os.path.isfile(os.path.join(source_folder, f))]
    
    # Счётчик для создания новых папок
    folder_count = 0
    # Счётчик для отслеживания количества файлов в текущей папке
    file_count = 0
    
    # Создаем новую папку для хранения файлов
    new_folder = os.path.join(source_folder, f'group_{folder_count + 1}')
    os.makedirs(new_folder, exist_ok=True)
    
    for file in files:
        # Перемещаем файл в новую папку
        shutil.move(os.path.join(source_folder, file), os.path.join(new_folder, file))
        file_count += 1
        
        # Если в папке уже 50 файлов, создаем новую папку
        if file_count >= 50:
            folder_count += 1
            file_count = 0
            new_folder = os.path.join(source_folder, f'group_{folder_count + 1}')
            os.makedirs(new_folder, exist_ok=True)

    print(f'Файлы организованы в {folder_count + 1} папок.')

if __name__ == "__main__":
    path = input("Введите путь к папке: ")
    if os.path.isdir(path):
        organize_files(path)
    else:
        print("Указанный путь не является папкой.")